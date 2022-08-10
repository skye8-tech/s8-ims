# S8-ims
Skye8 intern management system

## Setup 
Follow the steps to setup your own *s8-ims* project:
- Fork the project to your own GibHub account
- Clone the projec using 
```git clone https://github.com/skye8-tech/s8-ims.git```
- Move into  the project using `cd s8-ims`
- Install the dependencies i.e. bootstrap and bootstrap-icon using `npm install`

- Then create a branch for your issue.
```git checkout -b <featuredIssue>```

## Contributing
### File laction
All the pages/files created should be in the `src/pages` directory. No `.html` files should be anywhere else.

### Required links
In very page, include the following links into the `<head>` tag.

```html
  <!-- bootstrap CDN for style and script --->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" defer></script>

   <!-- user Js and style -->
   <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
   <script src="src/script.js" defer></script>
```

### Separation of concern
Every styles code should be in the `style` folder and every Javascript code should be located in the `script.js` file.



