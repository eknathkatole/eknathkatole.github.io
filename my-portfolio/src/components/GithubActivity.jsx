import { GitBranch as Github } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { SectionTitle } from "./PortfolioSections.jsx";

function GithubActivity() {
  return (
    <section className="section github-section">
      <SectionTitle icon={<Github size={18} />} title="GitHub Activity" />
      <div className="github-card">
        <div className="contribution-header">
          <span>GitHub Contributions</span>
          <a
            href="https://github.com/eknathkatole"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
        <div className="github-calendar-wrapper">
          <GitHubCalendar
            username="eknathkatole"
            blockSize={13}
            blockMargin={4}
            blockRadius={2}
            fontSize={12}
          />
        </div>
      </div>
    </section>
  );
}

export default GithubActivity;
