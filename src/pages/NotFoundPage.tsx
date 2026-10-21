import { Link } from "react-router-dom";
import { EmptyState } from "../components/ui/PageHeader";

export function NotFoundPage() {
  return (
    <EmptyState title="Page not found">
      <Link to="/" className="btn-primary mt-2">
        Go to the dashboard
      </Link>
    </EmptyState>
  );
}
