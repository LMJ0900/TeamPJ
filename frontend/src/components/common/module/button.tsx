export default function Button1(){
    return(
        <html
  key="1"
  lang="ko"
>
  <head>
    <meta charSet="UTF-8" />
    <style
      dangerouslySetInnerHTML={{
        __html: ' .btn{display: inline; width: 150px; height: 150px; border-radius: 500px; background-color: blue-600}.btn:hover{background-color: white !important; }.btn span:after{content: "쇼핑몰 창업"; position: absolute; top: 50px; left: 30px; }.btn:hover span:after{content: "누구나 손쉽게 나만의 쇼핑몰을 시작하세요"; position: absolute; }'
      }}
     />
  </head>
  <body>
    <button className="btn bg-blue-600" >
      <span />
    </button>
  </body>
</html>
    )
}