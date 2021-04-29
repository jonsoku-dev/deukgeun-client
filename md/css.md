# Wrapper vs Container 

1. container 
2. wrapper 
3. item 
4-1. item__abc
4-2. item--abc   

## example 1
```html
<div class="features-wrapper">
    <div class="feature">...</div>
    <div class="feature">...</div>
    <div class="feature">...</div>
    <div class="feature">...</div>
</div>

<style>
.features-wrapper {
    display: grid;
    grid-column-gap: 1rem;
}
.feature {}
</style>
```

## example 2
```html
<section class="container">
  <div class="wrapper">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</section>
```

