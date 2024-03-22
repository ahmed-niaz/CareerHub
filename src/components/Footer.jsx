import social from '../assets/icons/social.png'
const Footer = () => {
  return (
    <main>
      <footer className="p-10 bg-base-200 text-base-content">
        <div className="footer py-32 container mx-auto">
        <aside>
          <h1>CareerHub</h1>
          <p className='w-1/2 '> There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form</p>
          <div>
            <img src={social} alt="" />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        </div>
       
      </footer>
    </main>
  );
};

export default Footer;
