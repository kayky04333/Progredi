import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Student {
  id: number;
  name: string;
  class: string;
  average: number;
  subjects: {
    math: number;
    portuguese: number;
    science: number;
    history: number;
  };
  status: "approved" | "recovery" | "failed";
}

const students: Student[] = [
  {
    id: 1,
    name: "Ana Silva",
    class: "9º A",
    average: 8.5,
    subjects: { math: 9.0, portuguese: 8.5, science: 8.0, history: 8.5 },
    status: "approved",
  },
  {
    id: 2,
    name: "Bruno Santos",
    class: "9º A",
    average: 7.2,
    subjects: { math: 7.5, portuguese: 7.0, science: 7.0, history: 7.3 },
    status: "approved",
  },
  {
    id: 3,
    name: "Carla Oliveira",
    class: "9º B",
    average: 5.8,
    subjects: { math: 6.0, portuguese: 5.5, science: 6.0, history: 5.8 },
    status: "recovery",
  },
  {
    id: 4,
    name: "Daniel Costa",
    class: "9º B",
    average: 9.2,
    subjects: { math: 9.5, portuguese: 9.0, science: 9.0, history: 9.3 },
    status: "approved",
  },
  {
    id: 5,
    name: "Elena Rodrigues",
    class: "9º A",
    average: 4.5,
    subjects: { math: 4.0, portuguese: 5.0, science: 4.5, history: 4.5 },
    status: "failed",
  },
  {
    id: 6,
    name: "Felipe Martins",
    class: "9º B",
    average: 7.8,
    subjects: { math: 8.0, portuguese: 7.5, science: 8.0, history: 7.8 },
    status: "approved",
  },
];

const getStatusBadge = (status: Student["status"]) => {
  const variants = {
    approved: { label: "Aprovado", className: "bg-success/10 text-success border-success/20" },
    recovery: { label: "Recuperação", className: "bg-warning/10 text-warning border-warning/20" },
    failed: { label: "Reprovado", className: "bg-destructive/10 text-destructive border-destructive/20" },
  };

  const { label, className } = variants[status];
  return (
    <Badge variant="outline" className={className}>
      {label}
    </Badge>
  );
};

const getGradeColor = (grade: number) => {
  if (grade >= 8) return "text-success font-semibold";
  if (grade >= 6) return "text-foreground font-medium";
  if (grade >= 5) return "text-warning font-medium";
  return "text-destructive font-semibold";
};

export const StudentTable = () => {
  return (
    <Card className="bg-card border-border/50 shadow-soft overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <h2 className="text-xl font-bold text-foreground">Lista de Alunos</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Acompanhamento detalhado de desempenho por disciplina
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="font-bold text-foreground">Aluno</TableHead>
              <TableHead className="font-bold text-foreground">Turma</TableHead>
              <TableHead className="font-bold text-foreground text-center">Matemática</TableHead>
              <TableHead className="font-bold text-foreground text-center">Português</TableHead>
              <TableHead className="font-bold text-foreground text-center">Ciências</TableHead>
              <TableHead className="font-bold text-foreground text-center">História</TableHead>
              <TableHead className="font-bold text-foreground text-center">Média</TableHead>
              <TableHead className="font-bold text-foreground">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <TableCell className="font-medium text-foreground">{student.name}</TableCell>
                <TableCell className="text-muted-foreground">{student.class}</TableCell>
                <TableCell className={`text-center ${getGradeColor(student.subjects.math)}`}>
                  {student.subjects.math.toFixed(1)}
                </TableCell>
                <TableCell className={`text-center ${getGradeColor(student.subjects.portuguese)}`}>
                  {student.subjects.portuguese.toFixed(1)}
                </TableCell>
                <TableCell className={`text-center ${getGradeColor(student.subjects.science)}`}>
                  {student.subjects.science.toFixed(1)}
                </TableCell>
                <TableCell className={`text-center ${getGradeColor(student.subjects.history)}`}>
                  {student.subjects.history.toFixed(1)}
                </TableCell>
                <TableCell className={`text-center font-bold ${getGradeColor(student.average)}`}>
                  {student.average.toFixed(1)}
                </TableCell>
                <TableCell>{getStatusBadge(student.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
