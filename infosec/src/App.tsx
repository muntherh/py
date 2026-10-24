import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { ExamWatcher } from "./components/layout/ExamWatcher";
import { useHydrated } from "./lib/useHydrated";
import { CryptoLabPage } from "./pages/CryptoLabPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ExamReviewPage } from "./pages/ExamReviewPage";
import { ExamTakePage } from "./pages/ExamTakePage";
import { ExamsPage } from "./pages/ExamsPage";
import { FlashcardsPage } from "./pages/FlashcardsPage";
import { LearnPage } from "./pages/LearnPage";
import { LessonPage } from "./pages/LessonPage";
import { MistakesPage } from "./pages/MistakesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PracticePage } from "./pages/PracticePage";
import { ProgressPage } from "./pages/ProgressPage";
import { RevisionPage } from "./pages/RevisionPage";
import { SettingsPage } from "./pages/SettingsPage";
import { SourcesPage } from "./pages/SourcesPage";
import { useSettings } from "./store/settingsStore";

export function App() {
  const hydrated = useHydrated();
  const theme = useSettings((s) => s.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("isma-theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted" role="status">
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
          <Route path="crypto" element={<CryptoLabPage />} />
          <Route path="flashcards" element={<FlashcardsPage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="exams" element={<ExamsPage />} />
          <Route path="exams/attempt/:attemptId" element={<ExamTakePage />} />
          <Route path="exams/attempt/:attemptId/review" element={<ExamReviewPage />} />
          <Route path="revision" element={<RevisionPage />} />
          <Route path="mistakes" element={<MistakesPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="sources" element={<SourcesPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
