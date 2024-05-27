function sincronizarEstilos(elementoHTML, novoEstilo) {
  Object.assign(elementoHTML, novoEstilo);
}

function aplicarEstilos() {
  const corpoTag = document.getElementById("corpo");
  const cabecalhoTag = document.getElementById("cabecalho");
  //   const logo_imagemTag = document.getElementById("logo_imagem");
  const menuTag = document.getElementById("menu");
  const joelhoTag = document.getElementById("joelho");
  const footerTag = document.getElementById("footer-tag");
  const meioTag = document.getElementById("meio");

  menuTag.style.display = "none";
  joelhoTag.style.display = "none";

  const corpo = {
    style: {
      "background-color": "black",
    },
  };

  const cabecalho = {
    style: {
      "min-height": "27vh",
      "background-image":
        "url(https://img.freepik.com/fotos-gratis/composicao-de-efeitos-climaticos_23-2149853311.jpg)",
      "background-size": "cover",
      backgroundPositionY: "calc(100% + 200px)",
      "background-repeat": "no-repeat",
    },
  };

  const meio = {
    style: {
      "background-image":
        "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fservices.meteored.com%2Fimg%2Farticle%2Fgases-toxicos-otra-amenaza-letal-del-volcan-en-la-palma-erupcion-canarias-369061-1_1024.jpg&f=1&nofb=1&ipt=b6c7f06de9ed121d952220a72bab209e89e9651561b01d89ef6ec09e51ce6da7&ipo=images)",
      "background-size": "cover",
      backgroundPositionY: "calc(100% + 450px)",
      "background-repeat": "no-repeat",
    },
  };

  const logo_imagem = {
    src: "",
    alt: "Logo_Alterada",
  };

  const footer = {
    style: {
      "min-height": "26vh",
      "background-image":
        "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgravatai24horas.com.br%2Fwp-content%2Fuploads%2F2023%2F09%2Fenchente-rs.jpeg&f=1&nofb=1&ipt=d85f8226dcfda4b214e347be2401aa4b1444be9cd7ad4b5c25f8974443f5544d&ipo=images)",
      "background-size": "cover",
      backgroundPositionY: "calc(100% + 200px)",
      "background-repeat": "no-repeat",
    },
  };

  sincronizarEstilos(footerTag.style, footer.style);
  sincronizarEstilos(cabecalhoTag.style, cabecalho.style);
  //   sincronizarEstilos(logo_imagemTag, logo_imagem);
  sincronizarEstilos(corpoTag.style, corpo.style);
  sincronizarEstilos(meioTag.style, meio.style);

  corpoTag.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src =
      "https://www.youtube.com/embed/cY9B3t-cC_c?si=GT3iWFqoPHkvOCjS";
    //https://www.facebook.com/hopevideosparaelcambio/videos/el-v%C3%ADdeo-m%C3%A1s-importante-que-ver%C3%A1s-hoy/1059409444601192/?__so__=permalink&__rv__=related_videos&locale=hi_IN&_rdr
    iframe.title = "YouTube video player";
    iframe.frameborder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerpolicy = "strict-origin-when-cross-origin";
    iframe.allowfullscreen = true;

    corpoTag.appendChild(iframe);

    corpoTag.addEventListener("click", () => {
      corpoTag.removeChild(iframe);
    });
  });
}

window.onload = function () {
  aplicarEstilos();
};
