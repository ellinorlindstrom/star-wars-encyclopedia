import { Link } from "react-router-dom";
import "../styles/NotFoundPage.scss";

const SvgPolygon = ({ id, points }: { id: string; points: string }) => (
  <polygon id={id} points={points}></polygon>
);

const SvgUse = ({
  className,
  width,
  height,
  href,
}: {
  className: string;
  width: string;
  height: string;
  href: string;
}) => (
  <svg className={className} width={width} height={height}>
    <use xlinkHref={href} />
  </svg>
);

const DivWithSvg = () => (
  <div id="sp" className="sphere">
    <svg>
      <defs>
        <SvgPolygon id="tri" points="0,60 16,-1 32,60" />
        <SvgPolygon id="tpz1" points="13,-1 0,60 59,60 45,-1" />
        <SvgPolygon id="tpz2" points="16,-1 7,60 83.5,60 74.5,-1" />
        <SvgPolygon id="tpz3" points="12.2,-1 8.5,60 91,60 88.5,-1" />
      </defs>
    </svg>
    <div className="hemi head">
      <div className="phase-1">
        <div className="opposite1">
          <SvgUse className="tr1a" width="32px" height="60px" href="#tri" />
          <SvgUse className="tr1b" width="32px" height="60px" href="#tri" />
        </div>
        <div className="opposite2">
          <SvgUse className="tr1a" width="32px" height="60px" href="#tri" />
          <SvgUse className="tr1b" width="32px" height="60px" href="#tri" />
        </div>
        <div className="opposite3">
          <SvgUse className="tr1a" width="32px" height="60px" href="#tri" />
          <SvgUse className="tr1b" width="32px" height="60px" href="#tri" />
        </div>
        <div className="opposite4">
          <SvgUse className="tr1a" width="32px" height="60px" href="#tri" />
          <SvgUse className="tr1b" width="32px" height="60px" href="#tri" />
        </div>
        <div className="opposite5">
          <SvgUse className="tr1a" width="32px" height="60px" href="#tri" />
          <SvgUse className="tr1b" width="32px" height="60px" href="#tri" />
        </div>
        <div className="opposite6">
          <SvgUse className="tr1a" width="32px" height="60px" href="#tri" />
          <SvgUse className="tr1b" width="32px" height="60px" href="#tri" />
        </div>
      </div>
      <div className="phase-2">
        <div className="opposite1">
          <SvgUse className="tpz1a" width="59px" height="60px" href="#tpz1" />
          <SvgUse className="tpz1b" width="59px" height="60px" href="#tpz1" />
        </div>
        <div className="opposite2">
          <SvgUse className="tpz1a" width="32px" height="60px" href="#tpz1" />
          <SvgUse className="tpz1b" width="32px" height="60px" href="#tpz1" />
        </div>
        <div className="opposite3">
          <SvgUse className="tpz1a" width="32px" height="60px" href="#tpz1" />
          <SvgUse className="tpz1b" width="32px" height="60px" href="#tpz1" />
        </div>
        <div className="opposite4">
          <SvgUse className="tpz1a" width="32px" height="60px" href="#tpz1" />
          <SvgUse className="tpz1b" width="32px" height="60px" href="#tpz1" />
        </div>
        <div className="opposite5">
          <SvgUse className="tpz1a" width="32px" height="60px" href="#tpz1" />
          <SvgUse className="tpz1b" width="32px" height="60px" href="#tpz1" />
        </div>
        <div className="opposite6">
          <SvgUse className="tpz1a" width="32px" height="60px" href="#tpz1" />
          <SvgUse className="tpz1b" width="32px" height="60px" href="#tpz1" />
        </div>
      </div>
      <div className="phase-3">
        <div className="opposite1">
          <SvgUse className="tpz2a" width="90px" height="60px" href="#tpz2" />
          <SvgUse className="tpz2b" width="90px" height="60px" href="#tpz2" />
        </div>
        <div className="opposite2">
          <SvgUse className="tpz2a" width="32px" height="60px" href="#tpz2" />
          <SvgUse className="tpz2b" width="32px" height="60px" href="#tpz2" />
        </div>
        <div className="opposite3">
          <SvgUse className="tpz2a" width="32px" height="60px" href="#tpz2" />
          <SvgUse className="tpz2b" width="32px" height="60px" href="#tpz2" />
        </div>
        <div className="opposite4">
          <SvgUse className="tpz2a" width="32px" height="60px" href="#tpz2" />
          <SvgUse className="tpz2b" width="32px" height="60px" href="#tpz2" />
        </div>
        <div className="opposite5">
          <SvgUse className="tpz1a" width="32px" height="60px" href="#tpz2" />
          <SvgUse className="tpz2b" width="32px" height="60px" href="#tpz2" />
        </div>
        <div className="opposite6">
          <SvgUse className="tpz2a" width="32px" height="60px" href="#tpz2" />
          <SvgUse className="tpz2b" width="32px" height="60px" href="#tpz2" />
        </div>
      </div>
      <div className="phase-4">
        <div className="opposite1">
          <SvgUse className="tpz3a" width="100px" height="60px" href="#tpz3" />
          <SvgUse className="tpz3b" width="100px" height="60px" href="#tpz3" />
        </div>
        <div className="opposite2">
          <SvgUse className="tpz3a" width="32px" height="60px" href="#tpz3" />
          <SvgUse className="tpz3b" width="32px" height="60px" href="#tpz3" />
        </div>
        <div className="opposite3">
          <SvgUse className="tpz3a" width="32px" height="60px" href="#tpz3" />
          <SvgUse className="tpz3b" width="32px" height="60px" href="#tpz3" />
        </div>
        <div className="opposite4">
          <SvgUse className="tpz3a" width="32px" height="60px" href="#tpz3" />
          <SvgUse className="tpz3b" width="32px" height="60px" href="#tpz3" />
        </div>
        <div className="opposite5">
          <SvgUse className="tpz3a" width="32px" height="60px" href="#tpz3" />
          <SvgUse className="tpz3b" width="32px" height="60px" href="#tpz3" />
        </div>
        <div className="opposite6">
          <SvgUse className="tpz3a" width="32px" height="60px" href="#tpz3" />
          <SvgUse className="tpz3b" width="32px" height="60px" href="#tpz3" />
        </div>
      </div>
      <div className="shape cylinder-2 cyl-2 eye">
        <div className="face bm"></div>
        <div className="face tp"></div>
        <div className="face side s0"></div>
        <div className="face side s1"></div>
        <div className="face side s2"></div>
        <div className="face side s3"></div>
        <div className="face side s4"></div>
        <div className="face side s5"></div>
        <div className="face side s6"></div>
        <div className="face side s7"></div>
        <div className="face side s8"></div>
        <div className="face side s9"></div>
        <div className="face side s10"></div>
        <div className="face side s11"></div>
        <div className="face side s12"></div>
        <div className="face side s13"></div>
        <div className="face side s14"></div>
        <div className="face side s15"></div>
        <div className="face side s16"></div>
        <div className="face side s17"></div>
        <div className="face side s18"></div>
        <div className="face side s19"></div>
        <div className="shape cylinder-2 cyl-2 eye2">
          <div className="face side s0"></div>
          <div className="face side s1"></div>
          <div className="face side s2"></div>
          <div className="face side s3"></div>
          <div className="face side s4"></div>
          <div className="face side s5"></div>
          <div className="face side s6"></div>
          <div className="face side s7"></div>
          <div className="face side s8"></div>
          <div className="face side s9"></div>
          <div className="face side s10"></div>
          <div className="face side s11"></div>
          <div className="face side s12"></div>
          <div className="face side s13"></div>
          <div className="face side s14"></div>
          <div className="face side s15"></div>
          <div className="face side s16"></div>
          <div className="face side s17"></div>
          <div className="face side s18"></div>
          <div className="face side s19"></div>
          <div className="face tp"></div>
        </div>
      </div>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div id="wrapper">
    <h1 className="press-start-2p-regular">Four, Oh! Four</h1>
    <h2> Page not found just like the rest of R2D2:s body!</h2>
    <p className="lead">
      Use the Force to go{" "}
      <Link className="btn-jedi" to="/">
        Home
      </Link>
      .
    </p>
    <div id="outline" className="centering">
      <div className="base">
        <div id="tridiv">
          <div className="body-part anim-base body-anim">
            <DivWithSvg />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
