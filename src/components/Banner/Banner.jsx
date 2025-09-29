export default function Banner() {
  return (
    <section className="w-full">
      <div className="relative w-full max-w-[1390px] mx-auto">
        <img
          srcSet="
            https://ghorerbazar.com/cdn/shop/files/web-Banner.jpg?v=1756728692&width=165 165w,
            https://ghorerbazar.com/cdn/shop/files/web-Banner.jpg?v=1756728692&width=360 360w,
            https://ghorerbazar.com/cdn/shop/files/web-Banner.jpg?v=1756728692&width=533 533w,
            https://ghorerbazar.com/cdn/shop/files/web-Banner.jpg?v=1756728692&width=720 720w,
            https://ghorerbazar.com/cdn/shop/files/web-Banner.jpg?v=1756728692&width=940 940w,
            https://ghorerbazar.com/cdn/shop/files/web-Banner.jpg?v=1756728692&width=1066 1066w,
            https://ghorerbazar.com/cdn/shop/files/web-Banner.jpg?v=1756728692&width=1100 1100w
          "
          sizes="(max-width: 768px) 100vw, 1390px"
          src="https://ghorerbazar.com/cdn/shop/files/web-Banner.jpg?v=1756728692&width=720"
          alt="Ghorer Bazar Banner"
          className="w-full h-auto object-cover rounded-xl shadow"
          width="1390"
          height="607"
        />
      </div>
    </section>
  );
}
