import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { StudentTable } from "@/components/StudentTable";
import { Users, TrendingUp, Award, AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total de Alunos"
            value={156}
            icon={Users}
            trend="12% vs mês anterior"
            trendUp={true}
          />
          <MetricCard
            title="Média Geral"
            value="7.5"
            icon={TrendingUp}
            trend="0.3 pontos"
            trendUp={true}
          />
          <MetricCard
            title="Taxa de Aprovação"
            value="87%"
            icon={Award}
            trend="5% vs semestre anterior"
            trendUp={true}
          />
          <MetricCard
            title="Em Recuperação"
            value={18}
            icon={AlertCircle}
            trend="3 alunos"
            trendUp={false}
          />
        </div>

        {/* Tabela de alunos */}
        <StudentTable />

        {/* Informações adicionais */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-card p-6 rounded-xl border border-border/50 shadow-soft">
            <h3 className="text-lg font-bold text-foreground mb-2">Destaque do Mês</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Daniel Costa com média 9.2 - Excelente desempenho em todas as disciplinas
            </p>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-success" />
              <span className="text-sm font-medium text-success">Melhor Aluno</span>
            </div>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border/50 shadow-soft">
            <h3 className="text-lg font-bold text-foreground mb-2">Atenção Necessária</h3>
            <p className="text-sm text-muted-foreground mb-3">
              5 alunos com média abaixo de 6.0 precisam de acompanhamento especial
            </p>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              <span className="text-sm font-medium text-warning">Acompanhamento</span>
            </div>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border/50 shadow-soft">
            <h3 className="text-lg font-bold text-foreground mb-2">Próxima Avaliação</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Provas finais agendadas para 15/12/2024 - 4 disciplinas
            </p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Preparação</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
