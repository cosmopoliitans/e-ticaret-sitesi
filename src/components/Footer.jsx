import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 ">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold">Hakkımızda</h4>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            cursus leo ut felis tincidunt cursus.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold">Bağlantılar</h4>
          <ul className="mt-4">
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">Ürünler</a>
            </li>
            <li>
              <a href="#">Hesabım</a>
            </li>
            <li>
              <a href="#">Sepetim</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold">İletişim</h4>
          <ul className="mt-4">
            <li>Adres: 123 Sokak, İstanbul</li>
            <li>Telefon: 555-1234</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
