import htmlPanelOver from "./panel_over.html";
import htmlIndex from "./index.html";
import htmlNotFound from "./404.html";

const homePage = "https://www.ohio.edu/cis/council-on-thai-studies";
const registerPage = "https://ohio.qualtrics.com/jfe/form/SV_cImwEytpUWlge3k?Q_CHL=social&Q_SocialSource=reddit";
const defaultPage = "https://forms.gle/nB6UJy9tCZcbj2yN6";
const virtualHallway = "https://meet.google.com/sbw-hnds-vih";
const oldVirtualHallway = "https://meet.google.com/qfr-rcfo-cnm";
const bestPresentationVote = "https://ohio.qualtrics.com/jfe/form/SV_3W66MEbrDxmhYxM";
const statusCode = 302; // The mapping can change at any time.

const panels = {
  panel1: "https://us02web.zoom.us/webinar/register/2016353940341/WN_DOCWA3TDRPuqbnWag8uh2Q",
  panel2: "https://us02web.zoom.us/webinar/register/8516353931016/WN_3JPAre-YQQaEYHa3PqW62Q",
  panel3: "https://us02web.zoom.us/webinar/register/6016353941609/WN_eQBNtLRqSl-xJlOoDUgoZw",
  panel4: "https://us02web.zoom.us/j/84394500315?pwd=TU1mWlUvOE5QSHNIV2c4NWJGWlJGdz09",
  panel5: "https://us02web.zoom.us/webinar/register/3916353933893/WN_a86MvK3fRyCYEgO7UHjAuA",
  panel6: "https://us02web.zoom.us/webinar/register/5116353942341/WN_Ph7nSVMnRnCUxZqR1bLAhQ",
  panel7: "https://us02web.zoom.us/webinar/register/3116353942840/WN_Z89EvR4sTf2LCz90IjhKpw",
  panel8: "https://us02web.zoom.us/webinar/register/5016353934569/WN_hSnjNJiyTKacZlYsBvmLDg",
  panel9: "https://us02web.zoom.us/webinar/register/8316353943716/WN_IhpvKX11Ti2Pxex4n-msNw",
  panel10: "https://us02web.zoom.us/webinar/register/2016353935253/WN_AMa8AOysSYWhNFXyYxHeJQ",
  panel11: "https://us02web.zoom.us/webinar/register/8016353936812/WN_Z3VJBArPTu-ZFvbynOehFA",
  panel12: "https://us02web.zoom.us/webinar/register/1416353945374/WN_KHtxpJMvRUKIkzBl1Y_52g",
  keynote: "https://us02web.zoom.us/webinar/register/8516353944676/WN_I0OVUNOkRqKRYO9TSFpTOg",
  sepcialsess: "https://us02web.zoom.us/webinar/register/7616353944217/WN_1D1VlTrbSwa0PxNa16OnnQ",
  panel13: "https://us02web.zoom.us/webinar/register/9116353935856/WN_HTa5j_RXQ2OdU6eJ6SASUQ",
  roundtable: "https://us02web.zoom.us/webinar/register/7516353937561/WN_tDBySREkS6O1O97iS9OLjg",
};

export default {
  async fetch(request: Request): Promise<Response> {
    let url = new URL(request.url);

    if (url.pathname === "/") {
      return Response.redirect(homePage, statusCode);
    } else if (url.pathname === "/register") {
      return Response.redirect(registerPage, statusCode);
    } else if (url.pathname === "/panel1") {
      return Response.redirect(panels["panel1"], statusCode);
    } else if (url.pathname === "/panel2") {
      return Response.redirect(panels["panel2"], statusCode);
    } else if (url.pathname === "/panel3") {
      return Response.redirect(panels["panel3"], statusCode);
    } else if (url.pathname === "/panel4") {
      return Response.redirect(panels["panel4"], statusCode);
    } else if (url.pathname === "/panel5") {
      return Response.redirect(panels["panel5"], statusCode);
    } else if (url.pathname === "/panel6") {
      return Response.redirect(panels["panel6"], statusCode);
    } else if (url.pathname === "/panel7") {
      return Response.redirect(panels["panel7"], statusCode);
    } else if (url.pathname === "/panel8") {
      return Response.redirect(panels["panel8"], statusCode);
    } else if (url.pathname === "/panel9") {
      return Response.redirect(panels["panel9"], statusCode);
    } else if (url.pathname === "/panel10") {
      return Response.redirect(panels["panel10"], statusCode);
    } else if (url.pathname === "/panel11") {
      return Response.redirect(panels["panel11"], statusCode);
    } else if (url.pathname === "/panel12") {
      return Response.redirect(panels["panel12"], statusCode);
    } else if (url.pathname === "/panel13") {
      return Response.redirect(panels["panel13"], statusCode);
    } else if (url.pathname === "/keynote") {
      return Response.redirect(panels["keynote"], statusCode);
    } else if (url.pathname === "/special-session") {
      return Response.redirect(panels["sepcialsess"], statusCode);
    } else if (url.pathname === "/roundtable") {
      return Response.redirect(panels["roundtable"], statusCode);
    } else if (url.pathname === "/hallway") {
      return Response.redirect(virtualHallway, statusCode);
    } else if (url.pathname === "/best-presentation") {
      return Response.redirect(bestPresentationVote, statusCode);
    } else {
      return new Response(htmlNotFound, {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        }
      });
    }
  },
};
