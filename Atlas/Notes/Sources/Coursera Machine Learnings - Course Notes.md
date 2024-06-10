---
created: 2023-11-23
---


> [!quote] Definition Machine Learning - Arthur Samuel (1959)
> "Field of Study that gives computers the ability to learn **without being explicitly programmed**."

## Supervised Learning

Learns by being given the right answers from the input (i) to the output (o). 
`i -> o`

*Types of Supervised Learning*:

| type           | description                                         | examples |
| -------------- | --------------------------------------------------- | -------- |
| Classification | predict a **category** from a small set of outputs (countable, discrete)| school grades, colors        |
| Regression     |predict a **number** from infinitely many possible outputs                                                    | house prizes        |
## Unsupervised Learning

*Types of unsupervised learning:*
1. Clustering (screenshot right)

# Labs


## Implement a model for a linear regression in python
### Libraries / Tools

1. **NumPy** - a  library for *scientific computing*
2. **Matplotlib**, a library for *plotting data*

```python
import numpy as np
import matplotlib.pyplot as plt
```

### Data 
We have two data points (minimum required for a linear function)
$P_1(1, 300)$
$P_2(2, 500)$

```python
x_train = np.array([1, 2])
y_train = np.array([300, 500])
# number of training examples
print(len(x_train))
```
### Plotting

```python
# Plot the data points
plt.scatter(x_train, y_train, marker='x', c='r')
# Set the title
plt.title("Housing Prices")
# Set the y-axis label
plt.ylabel('Price (in 1000s of dollars)')
# Set the x-axis label
plt.xlabel('Size (1000 sqft)')
plt.show()
```

### Model
We create a function, that *computes the prediction of a linear model*

```python

def compute_model_output(xs: np.ndarray, w: int, b: int) -> np.ndarray:
    """Computes the prediction of a linear model.
    Parameters:
        xs: Data of examples.
        w: Model parameter (slope).
        b: Model parameter (y-intercept).

    Returns:
        Model prediction.
    """
    return [w * x + b for x in xs]
```

## Implement and Explore the `cost` function for linear regression with one variable

### Cost function
The equation for cost with one variable is:
  $$J(w,b) = \frac{1}{2m} \sum\limits_{i = 0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)})^2 \tag{1}$$
where
  $$f_{w,b}(x^{(i)}) = wx^{(i)} + b \tag{2}$$
  - $f_{w,b}(x^{(i)})$ is our prediction for example $i$ using parameters $w,b$.  
  - $(f_{w,b}(x^{(i)}) -y^{(i)})^2$ is the squared difference between the target value and the prediction.  
  - These differences are summed over all the $m$ examples and divided by `2m` to produce the cost, $J(w,b)$

Code:
```python
import numpy as np

def compute_cost(xs: np.ndarray, ys: np.ndarray, w: int, b: int) -> float:
    """Computes the cost function for linear regression.
    Parameters:
        xs: Data of examples
        ys: Target values
        w: Model parameter (slope)
        b: Model parameter (y-intercept)

    Returns:
        The cost The cost of using w,b as the parameters for linear regression
        to fit the data points in xs and ys.
    """
    m = len(xs) # amount of data examples
    costs = [((w * x + b) - y)**2 for x in xs for y in ys]
    
    return 1 / (2 * m) * sum(costs)
```

### Automate the process of optimizing w and b using gradient descent

The gradient descent formula for a linear model requires two things:
- linear model: $$f_{w,b}(x^{(i)}) = wx^{(i)} + b\tag{1}$$
- a cost function $$J(w,b) = \frac{1}{2m} \sum\limits_{i = 0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)})^2\tag{2}$$

The gradient descend calculates __simultaneously__ the new values of $w$ and $b$ by subtracting a **learning rate** factor $\alpha$  multiplied by the *partial derivation* $$\tag{3}$$ of the cost function until it converges against a local minima.
$$
\begin{align}
\frac{\partial J(w,b)}{\partial w}  &= \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)})x^{(i)} \tag{4}\\
  \frac{\partial J(w,b)}{\partial b}  &= \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)}) \tag{5}\
\end{align}
$$

#### Calculating the gradient

```python
def compute_gradient2(xs: np.ndarray, ys: np.ndarray, w: int, b: int) -> Tuple[float, float]:
  """Computes the gradient for linear regression
  Parameters:
      xs: Data of examples
      ys: Target values
      w: Model parameter (slope)
      b: Model parameter (y-intercept)

  Returns:
      deriv_J_w: The gradient of the cost w.r.t. the paramaters w
      deriv_J_b: The gradient of the cost w.r.t. the parameters b
  """

  sample_count = len(xs) # amount of data examples
  deriv_J_w = 0
  deriv_J_b = 0

  # linear model: predicted values
  ys_predict = [w * x + b for x in xs]
  
  for x, y, yp in zip(xs, ys, ys_predict):
    w_temp = (yp - y) * x
    b_temp = yp - y
    deriv_J_w += w_temp
    deriv_J_b += b_temp

  return deriv_J_w / sample_count, deriv_J_b / sample_count
```

#### Gradient Descent

```python
def gradient_descent(x, y, w_in, b_in, alpha, num_iters, cost_function, gradient_function):
    """
    Performs gradient descent to fit w,b. Updates w,b by taking
    num_iters gradient steps with learning rate alpha

    Args:
      x (ndarray (m,))  : Data, m examples
      y (ndarray (m,))  : target values
      w_in,b_in (scalar): initial values of model parameters
      alpha (float):     Learning rate
      num_iters (int):   number of iterations to run gradient descent
      cost_function:     function to call to produce cost
      gradient_function: function to call to produce gradient

    Returns:
      w (scalar): Updated value of parameter after running gradient descent
      b (scalar): Updated value of parameter after running gradient descent
      J_history (List): History of cost values
      p_history (list): History of parameters [w,b]
      """

    # An array to store cost J and w's at each iteration primarily for graphing later
    J_history = []
    p_history = []
    b = b_in
    w = w_in

    for i in range(num_iters):
        # Calculate the gradient and update the parameters using gradient_function
        dj_dw, dj_db = gradient_function(x, y, w , b)

        # Update Parameters using equation (3) above
        b = b - alpha * dj_db
        w = w - alpha * dj_dw

        # Save cost J at each iteration
        if i<100000:      # prevent resource exhaustion
            J_history.append( cost_function(x, y, w , b))
            p_history.append([w,b])
        # Print cost every at intervals 10 times or as many iterations if < 10
        if i% math.ceil(num_iters/10) == 0:
            print(f"Iteration {i:4}: Cost {J_history[-1]:0.2e} ",
                  f"dj_dw: {dj_dw: 0.3e}, dj_db: {dj_db: 0.3e}  ",
                  f"w: {w: 0.3e}, b:{b: 0.5e}")

    return w, b, J_history, p_history #return w and J,w history for graphing
    
```



```python
import matplotlib.pyplot as plt

# plot cost versus iteration
fig, (ax1, ax2) = plt.subplots(1, 2, constrained_layout=True, figsize=(12,4))
ax1.plot(J_hist[:100])
ax2.plot(1000 + np.arange(len(J_hist[1000:])), J_hist[1000:])
ax1.set_title("Cost vs. iteration(start)");  ax2.set_title("Cost vs. iteration (end)")
ax1.set_ylabel('Cost')            ;  ax2.set_ylabel('Cost')
ax1.set_xlabel('iteration step')  ;  ax2.set_xlabel('iteration step')
plt.show()
```

![[Pasted image 20231207152554.png]]

