## Build angular app (aot)
go to `dynjspof` folder and execute and run

``` npm i ```

``` npm run build ```

## Build plugins (ts -> js)
go to `dynjspof-plugins` folder and run

``` npm i ```

``` npx tsc ```

copy dynjspof-plugins `out` folder to angular `dist` folder

## Try it
go to `dist` folder and run

``` npx http-server ```

open browser **in incognito** and write e.g. 

```out/p1```  

then click `load`
