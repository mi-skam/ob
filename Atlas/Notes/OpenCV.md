---
aliases:
publish: true
date: 2023-09-05
---
# OpenCV

[Python OpenCV - Pose Estimation - GeeksforGeeks](https://www.geeksforgeeks.org/python-opencv-pose-estimation/)

[OpenCV: Real Time pose estimation of a textured object](https://docs.opencv.org/4.x/dc/d2c/tutorial_real_time_pose.html)

[OpenCV: Camera calibration With OpenCV](https://docs.opencv.org/4.x/d4/d94/tutorial_camera_calibration.html)

[OpenCV: Interactive camera calibration application](https://docs.opencv.org/4.x/d7/d21/tutorial_interactive_calibration.html)

## 📼

[(49) OpenCV Course - Full Tutorial with Python - YouTube](https://www.youtube.com/watch?v=oXlwWbU8l2o)

[(49) OpenCV Python Tutorial #1 - Introduction & Images - YouTube](https://www.youtube.com/watch?v=qCR2Weh64h4&list=PLzMcBGfZo4-lUA8uGjeXhBUUzPYc6vZRn)


## Opening a webcam 

^5c626b

This is a minimal setup, where we can thow a webcam stream in a window. This is a requirement for further data analyis or just a convenience step to also show the output. 


```python
import cv2

# Select 1st camera
cap = cv2.VideoCapture(0)
# set resolutin
cap.set(3, 1280) # width
cap.set(4, 720) # height

while True:
  # read data from camera into img
  success, img = cap.read()
  # display img
  cv2.imshow("image", img)́
  # artificial delay in ms
  cv2.waitkey(1) 
```


## Using mediapipe for hand tracking

Based on [[#^5c626b]] we can extend the example and run a video **hand detection** analysis on the video stream with the following example

```python
import cv2
from cvzone.HandTrackingModule import HandDetector

cap = cv2.VideoCapture(0)
cap.set(3, 1280)
cap.set(4, 720)

# detect hand
detector = HandDetector(maxHands=2, detectionCon=.8)

while True:
  success, img = cap.read()
  hands, img = detector.findHands(img)
  cv2.imshow("image", img)
  cv2.waitKey(1)
```
