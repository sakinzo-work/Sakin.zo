import { NoTranslate } from "../context/LanguageContext.jsx";
import RouteLink from "./AppLink.jsx";
import { T } from "../context/LanguageContext.jsx";
import ContactLinks from "./ContactLinks.jsx";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <NoTranslate>
          <RouteLink className="brand logo-txt" href="/">
            <T>{" Sakin"}</T>
            <span>
              <T>{".zo"}</T>
            </span>
          </RouteLink>
        </NoTranslate>
        <div className="footer-links">
          <RouteLink href="/services"><T>Services</T></RouteLink>
          <RouteLink href="/who-we-are">
            <T>{"About"}</T>
          </RouteLink>
          <RouteLink href="/careers">
            <T>{"Careers"}</T>
          </RouteLink>
          <RouteLink href="/blog">
            <T>{"Insights"}</T>
          </RouteLink>
          <RouteLink href="/contact">
            <T>{"Contact"}</T>
          </RouteLink>
        </div>
        <span id="year">
          <T>{"\xA9 "}</T>
          <T>{new Date().getFullYear()}</T>
          <T>{" Sakinzo"}</T>
        </span>
      </div>
      <div className="footer-contact"><ContactLinks /></div>
    </footer>
  );
}
