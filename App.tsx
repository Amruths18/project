import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  FileText,
  TrendingUp,
  Search,
  MessageSquare,
  Brain,
  Target,
  Briefcase,
  Award,
} from "lucide-react";
import { ResumeModule } from "./components/resume-module";
import { CareerPathModule } from "./components/career-path-module";
import { JobMatchingModule } from "./components/job-matching-module";
import { InterviewAssistantModule } from "./components/interview-assistant-module";
import { DashboardOverview } from "./components/dashboard-overview";
import { DemoModeBanner } from "./components/demo-mode-banner";
import { StartupNotification } from "./components/startup-notification";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <StartupNotification />
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-15 h-15 bg-primary rounded-lg">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  RESUMIND
                  <br></br>
                  AI Career Intelligence
                </h1>
                <p className="text-sm text-muted-foreground">
                  Your complete job-seeking companion
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Target className="w-3 h-3" />
                Pro Plan
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-10 py-20">
        <DemoModeBanner />
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger
              value="dashboard"
              className="flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </TabsTrigger>
            <TabsTrigger
              value="career"
              className="flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              Career Path
            </TabsTrigger>
            <TabsTrigger
              value="jobs"
              className="flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Job Matching
            </TabsTrigger>
            <TabsTrigger
              value="interview"
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Interview Prep
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardOverview onNavigate={setActiveTab} />
          </TabsContent>

          <TabsContent value="resume">
            <ResumeModule />
          </TabsContent>

          <TabsContent value="career">
            <CareerPathModule />
          </TabsContent>

          <TabsContent value="jobs">
            <JobMatchingModule />
          </TabsContent>

          <TabsContent value="interview">
            <InterviewAssistantModule />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}