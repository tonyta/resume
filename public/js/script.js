// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-51256809-1', 'tonyta.herokuapp.com');
ga('send', 'pageview');


// Console Art
function drawSutro() {
  var sutro = "\r\n%c                  |   |   |\r\n                  |   |   |\r\n                  |   |   |\r\n              \\###############/\r\n                  |   |   |\r\n%c     ,--.%c         |   |   |\r\n%c         )%c        |===|===|\r\n%c       _'-. _%c      |  |  |\r\n%c      (    ) ),--.%c |  |  |%c   *%c*%c*%c*%c*%c*%c*%c*%c*%c*\r\n%c                  )-._%c|  |%c   * I%c ♥%c SF *\r\n%c     _________________)%c  |%c   *%c*%c*%c*%c*%c*%c*%c*%c*%c*r\n%c                    |=|=|\r\n                    | | |\r\n                   |  |  |\r\n                   |  |  |%c          .--,\r\n%c                   |  |  |%c      .--(\r\n%c                   |==|==|%c  .-,(  .-'_\r\n%c                  |   |%c_.-,(   . (    )\r\n%c                  |%c   (_______(%c\r\n                  |   |   |%c    `--------%c\r\n                  |   |   |\r\n                 |====|====|\r\n                 |    |    |\r\n                 |    |    |\r\n                 |    |    |\r\n                |     |     |\r\n%c           vvvVvvVVvVVvvvvVVvvVvvVv\r\n        vVvvVvvVVVvvVVVVvvVvVvvvvVVVvv";
  var r = 'color:#D00';
  var g = 'color:#080';
  var b = 'color:#BCE';
  var k = 'color:#000';
  var _1 = 'color:#FF0000',
      _2 = 'color:#FF7F00',
      _3 = 'color:#FFFF00',
      _4 = 'color:#00FF00',
      _5 = 'color:#0000FF',
      _6 = 'color:#4B0082',
      _7 = 'color:#8F00FF'
  console.log(sutro,r,b,r,b,r,b,r,b,r,_1,_2,_3,_4,_5,_6,_7,_1,_2,_3,b,r,k,r,k,b,r,_1,_2,_3,_4,_5,_6,_7,_1,_2,_3,r,b,r,b,r,b,r,b,r,b,r,b,r,g);
}

window.onload = drawSutro;