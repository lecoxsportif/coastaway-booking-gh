import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're here to help plan your perfect coastal escape
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
            <p className="text-muted-foreground">
              Apostle Baidoo Lane, 
              <br />
              Ankwanda, Elmina,
              <br />
              Central Region, Ghana,
              <br />
              CR-0240-4242
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
            <p className="text-muted-foreground">
              Tel: +233 204539426 / +233 243871142
              <br />
              Whatsapp: +233 204539426
              <br />
              Available 24/7
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">E-mail</h3>
            <p className="text-muted-foreground">
              afikibeachhouse@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
