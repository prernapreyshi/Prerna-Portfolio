import { Smile } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
            <Smile className="w-4 h-4" style={{ color: '#B57EDC' }} />
            <span>Designed, developed, and deployed</span>
            <span>by Prerna Preyshi</span>
            <Smile className="w-4 h-4" style={{ color: '#B57EDC' }} />
          </div>
          
          <p className="text-sm text-muted-foreground">
            Full Stack Developer
          </p>
          
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            {/* Add social links or other content here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
