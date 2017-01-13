/*
  I have no clue what this format is but here we go!!!
*/

/*
  HAD:
  <link rel="stylesheet" href="${cssPath}">
  <script type="text/javascript" src="${jsPath}"></script>
*/
module.exports = ({cssPath, jsPath, content}) => `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
      html {
        height: calc(100% - 20px);
      }
      body {
        height: 100%;
      }
      textarea {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        resize: none;
        outline: none;
      }
    </style>
  </head>
  <body>
    <textarea autofocus id="notepad" name="notepad">${content}</textarea>
    <script>
      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this, args = arguments;
            var later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };
      var area = document.querySelector('textarea');
      function save(){
        fetch('/', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({content: area.value})
        });
      }
      area.addEventListener('input', debounce(save, 500), false);
    </script>
  </body>
</html>
`;
