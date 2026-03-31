const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="mb-4 text-lg font-semibold text-gray-800">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-secondary transition"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);


export default FooterColumn;
