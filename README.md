# Deprecated

Check https://github.com/cajmorgan/aspect-ratio-c


A very easy way to calculate from given width and height in pixels to any other combination by applying a new pixel ratio! For example, let's say you have a picture that is 1920x1080 pixels. You need to convert that picture to 16:10 ratio (or any other), with this CLI you can choose if you want to manipulate the width or the height. Let me show you with some code.

To install:
```
sudo npm install -g toaspectratio
```

If I want to manipulate 1920x1080 (16:9) to become 5:4 and I want to change the width,
In CLI enter: 
```
toaspectratio width 1920 1080 5 4
//Result:
//Aspect ratio: 5:4
//1350x1080 
```

If I want to change the height:
```
toaspectratio height 1920 1080 5 4
//Result:
//Aspect ratio: 5:4
//1920x1536 
```

