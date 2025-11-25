import { GraduationCap } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-medium sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Progredi</h1>
              <p className="text-sm text-primary-foreground/80">Sistema de Avaliação Escolar</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium">Instituição de Ensino</p>
              <p className="text-xs text-primary-foreground/70">Ano Letivo 2024</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
