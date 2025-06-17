
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accessibility, Eye, Type, Palette } from "lucide-react";

export function AccessibilityButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [highContrast, setHighContrast] = useState(false);
    const [largeText, setLargeText] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        // Applica le modifiche per l'alto contrasto
        if (highContrast) {
            document.documentElement.classList.add('high-contrast');
        } else {
            document.documentElement.classList.remove('high-contrast');
        }
    }, [highContrast]);

    useEffect(() => {
        // Applica le modifiche per il testo grande
        if (largeText) {
            document.documentElement.classList.add('large-text');
        } else {
            document.documentElement.classList.remove('large-text');
        }
    }, [largeText]);

    useEffect(() => {
        // Applica le modifiche per ridurre le animazioni
        if (reducedMotion) {
            document.documentElement.classList.add('reduce-motion');
        } else {
            document.documentElement.classList.remove('reduce-motion');
        }
    }, [reducedMotion]);

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-white dark:bg-neutral-900 border-2"
                    aria-label="Opzioni di accessibilità"
                >
                    <Accessibility className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4" align="end" side="top">
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Accessibility className="h-5 w-5" />
                        Accessibilità
                    </h3>
                    
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Palette className="h-4 w-4" />
                                <label htmlFor="high-contrast" className="text-sm font-medium">
                                    Alto contrasto
                                </label>
                            </div>
                            <Switch
                                id="high-contrast"
                                checked={highContrast}
                                onCheckedChange={setHighContrast}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Type className="h-4 w-4" />
                                <label htmlFor="large-text" className="text-sm font-medium">
                                    Testo grande
                                </label>
                            </div>
                            <Switch
                                id="large-text"
                                checked={largeText}
                                onCheckedChange={setLargeText}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Eye className="h-4 w-4" />
                                <label htmlFor="reduced-motion" className="text-sm font-medium">
                                    Riduci animazioni
                                </label>
                            </div>
                            <Switch
                                id="reduced-motion"
                                checked={reducedMotion}
                                onCheckedChange={setReducedMotion}
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
