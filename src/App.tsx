import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { ExamWatcher } from "./components/layout/ExamWatcher";
import { useHydrated } from "./lib/useHydrated";
import { useSettings } from "./store/settingsStore";
import { pythonRunner } from "./runtime/PythonRunner";
import { DashboardPage } from "./pages/DashboardPage";
import { LearnPage } from "./pages/LearnPage";
import { LessonPage } from "./pages/LessonPage";
import { SummariesPage } from "./pages/SummariesPage";
import { LabPage } from "./pages/LabPage";
import { ExercisePage } from "./pages/ExercisePage";
import { PracticePage } from "./pages/PracticePage";
import { ExamsPage } from "./pages/ExamsPage";
import { ExamIntroPage } from "./pages/ExamIntroPage";
import { ExamTakePage } from "./pages/ExamTakePage";
import { ExamReviewPage } from "./pages/ExamReviewPage";
import { ResultsPage } from "./pages/ResultsPage";
import { MistakesPage } from "./pages/MistakesPage";
import { SourcesPage } from "./pages/SourcesPage";
import { SettingsPage } from "./pages/SettingsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  const hydrated = useHydrated();
  const theme = useSettings((s) => s.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    // Warm up the Python interpreter in the background.
    const id = setTimeout(() => void pythonRunner.ensureReady().catch(() => undefined), 300);
    return () => clearTimeout(id);
  }, []);

  if (!hydrated) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-muted" role="status">
        Loading your progress…
      </div>
    );
  }

  return (
    <HashRouter>
      <ExamWatcher />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="learn/:lessonId" element={<LessonPage />} />
          <Route path="summaries" element={<SummariesPage />} />
          <Route path="lab" element={<LabPage />} />
          <Route path="lab/exercise/:exerciseId" element={<ExercisePage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="exams" element={<ExamsPage />} />
          <Route path="exams/:examId" element={<ExamIntroPage />} />
          <Route path="exams/attempt/:attemptId" element={<ExamTakePage />} />
          <Route path="exams/attempt/:attemptId/review" element={<ExamReviewPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="mistakes" element={<MistakesPage />} />
          <Route path="sources" element={<SourcesPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
