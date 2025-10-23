const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Seaside Haven</h3>
            <p className="text-muted-foreground">Your coastal sanctuary in rural Ghana</p>
          </div>
          
          <div className="text-center md:text-right text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Seaside Haven. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
