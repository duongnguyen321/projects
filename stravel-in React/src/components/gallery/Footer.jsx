import "../../Style/home/night.css";
import "../../Style/home/style.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <a href="#home" className="logo">
            <h3>
              <span>S</span>travel
            </h3>
          </a>
          <p>
            Trải qua 17 năm phát triển bền vững, STravel đã ghi dấu ấn của mình
            với thông điệp <br />
            “Nâng tầm trải nghiệm từng chuyến đi”
          </p>
        </div>
        <div className="box">
          <h3>Chi nhánh chính</h3>
          <a href="#home">Hà nội</a>
          <a href="#home">Ấn độ</a>
          <a href="#home">Mỹ</a>
          <a href="#home">Nhật Bản</a>
          <a href="#home">Pháp</a>
        </div>
        <div className="box">
          <h3>chuyển hướng</h3>
          <a href="#home">Tổng Hợp</a>
          <a href="#egypt">Egypt</a>
          <a href="#tokyo">Tokyo</a>
          <a href="#paris">Paris</a>
          <a href="#sydney">Sydney</a>
          <a href="#hawaii">Hawaii</a>
          <a href="#mumbai">Mumbai</a>
        </div>
        <div className="box">
          <h3>Tương tác</h3>
          <a href="#home">facebook</a>
          <a href="#home">instagram</a>
          <a href="#home">twitter</a>
          <a href="#home">linkedin</a>
        </div>
      </div>
      <a href="#home">
        <h1 className="credit">
          created by
          <span> STRAVEL </span>
          all rights reserved!
        </h1>
      </a>
    </section>
  );
};

export default Footer;
