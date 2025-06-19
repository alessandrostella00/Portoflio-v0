
import { motion } from "framer-motion";
import { AlertCircle, ExternalLink } from "lucide-react";

export function SetupInstructions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8"
    >
      <div className="flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
        <div>
          <h3 className="font-semibold text-amber-800 mb-2">
            Configurazione Required per i Moduli
          </h3>
          <div className="text-sm text-amber-700 space-y-2">
            <p><strong>Per il modulo di contatto:</strong></p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Vai su <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline inline-flex items-center">Formspree.io <ExternalLink className="w-3 h-3 ml-1" /></a></li>
              <li>Crea un account gratuito</li>
              <li>Crea un nuovo form e copia l'ID</li>
              <li>Sostituisci "YOUR_FORM_ID" nel codice con il tuo ID</li>
            </ol>
            
            <p className="mt-4"><strong>Per la newsletter:</strong></p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Scegli un servizio come ConvertKit, Mailchimp, o Buttondown</li>
              <li>Configura l'API endpoint per le iscrizioni</li>
              <li>Aggiorna l'URL nell'handleSubmit della newsletter</li>
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
