---
aliases: 
publish: true
created: 2023-11-01
---
## Setup

```js
@html('''
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"</script>
'''
)
```
### Imperative Style
```js
import Phaser from 'phaser';

new Phaser.Game({
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: {
    preload,
    create
  }
});

function preload() {
  console.log('preload');
}

function create() {
  console.log('create');
}


```

### OO style
```js
import Phaser from 'phaser';

export class Game extends Phaser.Scene {
  constructor() {
    super('game')
  }

  preload() {
    console.log('preload')
  }

  create() {
    console.log('create')
  }
}
```

```js
import Phaser from 'phaser';
import Game from './scenes/Game'

export default new Phaser.Game({
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: Game,
})

```

## Math

### Random

Create a random value between boundaries (inclusive)
```js
const x = Phaser.Math.Between(40, 80);
```

## Images

### Origin

We load the assets in `preload()` and add it to the scene in `create()`
```js
function preload() {
  this.load.image('sky', 'assets/sky.png');
}

function create() {
  const imageCenterX = this.game.config.width / 2;
  const imageCenterY = this.game.config.height / 2;

  // Der Bildmittelpunkt wird auf imageCenterX/imageCenterY projiziert (siehe Skizze)
  this.add.image(imageCenterX, imageCenterY, 'sky');
}
```

![[scene.add.image.2.svg]]
### Change Origin

We can change the origin from the default of `0.5 / 0.5` to whatever we like, let's say we want the the top left corner of the image, then we would say `setOrigin(0, 0)` or we want to put it on the right corner of the display, then we would map the right / bottom corner. Look at the sketch.

![[scene.add.image.setOrigin.svg]]

### relative placement

Due to the different display sizes, it's often better to place objects relative to the _width_ and _height_.

![[Pasted image 20240216102720.png]]
## Physics

To enable physics to an object, you need to change the method you'd use to `add` something to the scene. 
```js
// -- NO physics
bird = this.add.sprite(30, middleY, 'bird');
// -- with physics
bird = this.physics.add.sprite(30, middleY, 'bird');
// -- with physics - static body (is not moved by gravity)
bird = this.physics.add.staticSprite(30, middleY, 'bird')
```
### Solid body Collider and Collision

To create a collider, between all physics enabled objects, you use .

```js
this.physics.add.collider(object1, object2, group1)
```

> [!TIP]- Make physics visible!
> There is a debug mode, which draws bars and arrows to visualise forces, directions and speed.

```js
physics: {
    default: 'arcade',
    arcade: {
      debug: true, // <--
    },
  },
```

You can control the directions, where the collision is happening. By default it's `true` for every direction.

```js
   this.player.body.checkCollision = {
      up: false,
      left: false,
      right: false,
    };
```
#### Test collisions

```js
update() {
    const touchingDown = this.player.body.touching.down;

    if (touchingDown) {
      this.player.setVelocityY(-300);
    }
  }
```
### Velocity and Gravity

If there is an object with attached physics, you find the properties under `body` (e.g. `bird.body.velocity`)

Velocity is understood as the amount of pixels per second an object is moving. Gravity is the delta of change of velocity aka **acceleration**.  `bird.body.gravity`

You can configure a 'global' gravity value for all objects in the **game configuration** object.

```js
physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
```

### Time

The `update` method is running at about 60 fps. 

```js
function(time, delta) {
  // returns something about ~13.6ms
  console.log(delta)
}
```

## Lifecycle methods

| Name      | Parameter   | Description                   |
| --------- |:----------- | ----------------------------- |
| `preload` |             | Preloading assets.            |
| `create`  |             | Adding assets into the scene. |
| `update`  | time, delta | Updates every frame.          |

## Groups

In Phaser you have this notion of groups, to ease setting common properties for elements in this group. It's an abstraction over a single item.

There are different groups for different types:
- a generic group created by `Phaser.add.group()`
- a group for **static body** items `Phaser.physics.add.staticGroup()`

> [!example] Example for a *static body* group.

The **API** for using groups follows a similar pattern.
```js
// creates a container for items, that are static bodies
const platforms = this.physics.add.staticGroup();
// adding sprites with the coordinates x, y
platforms.create(x1, y2, spr1)
platforms.create(x2, y2, spr2)
// refresh Physics body
const body = platform.body
body.updateFromGameObject()
```

## Camera

Create a camera that follows a sprite.
```js
this.cameras.main.startFollow(this.player)
```

To freeze a Sprite, one can set in sync with the camera object.
```js
this.add.image(240, 320, 'background').setScrollFactor(1, 0);
```

We can stop the camera from scrolling by defining a dead zone.

```js
// set the horizontal dead zone to 1.5x game width
this.cameras.main.setDeadzone(this.scale.width * 1.5)
```


## Movement

We need to add `cursors = this.input.keyboard.createCursorKeys()` to `create()`.  and react to the cursors in update

```js
  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    const touchingDown = this.player.body.touching.down;

    if (touchingDown) {
      this.player.setVelocityY(-300);
    }
    // left and right input logic
    if (this.cursors.left.isDown && !touchingDown) {
      this.player.setVelocityX(-200);
    } else if (this.cursors.right.isDown && !touchingDown) {
      this.player.setVelocityX(200);
    } else {
      this.player.setVelocityX(0);
    }
  }
```

## State management with MobX

With [[MobX]] we introduce a reactive state management to Phaser3, which comes in handy if you want to share a property between two scenes and want to *autoupdate* the value in either components.

This could also be handled by using *events* and a  *singleton object*, but MobX manages the state and creates events and callbacks to ease development and keeps the code quite separated.


## Spline

...

```js



class Example extends Phaser.Scene
{
    sprite;
    cursors;
    path;
    t = 0;
    vec = new Phaser.Math.Vector2();
    
    constructor(){
        super('Example')
    }

    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }


    create ()
    {
    // Create a circular path
    this.path = new Phaser.Curves.Path(400, 300).circleTo(200);

    // Add object to the scene
    this.sprite = this.physics.add.image(400, 300, 'lemming');

    // Enable cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            // Move object along the path
            this.path.getPoint(this.t, this.vec);

            this.sprite.x = this.vec.x;
            this.sprite.y = this.vec.y;

            this.t += 0.01;

            if (this.t > 1)
            {
                this.t = 0;
            }
        }
    }
}


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
};

const game = new Phaser.Game(config);

```