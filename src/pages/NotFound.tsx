
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Imposta il titolo della pagina
    document.title = "404 - Pagina non trovata | Alessandro Stella";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-neutral-300 dark:text-neutral-700 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
            Pagina non trovata
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Spiacente, la pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="flex items-center gap-2"
            aria-label="Torna alla pagina precedente"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna indietro
          </Button>
          
          <Button 
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-2"
            aria-label="Vai alla homepage"
          >
            <Home className="h-4 w-4" />
            Torna alla Home
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
          <p>Se pensi che questa sia un errore, puoi contattarmi attraverso la homepage.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
