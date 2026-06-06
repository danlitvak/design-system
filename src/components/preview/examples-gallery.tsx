"use client"

import { ActivateAgentDialog } from "@/components/preview/cards/activate-agent-dialog"
import { AnalyticsCard } from "@/components/preview/cards/analytics-card"
import { AnomalyAlert } from "@/components/preview/cards/anomaly-alert"
import { AssignIssue } from "@/components/preview/cards/assign-issue"
import { BarChartCard } from "@/components/preview/cards/bar-chart-card"
import { BookAppointment } from "@/components/preview/cards/book-appointment"
import { CodespacesCard } from "@/components/preview/cards/codespaces-card"
import { ContributionsActivity } from "@/components/preview/cards/contributions-activity"
import { Contributors } from "@/components/preview/cards/contributors"
import { EnvironmentVariables } from "@/components/preview/cards/environment-variables"
import { FeedbackForm } from "@/components/preview/cards/feedback-form"
import { FileUpload } from "@/components/preview/cards/file-upload"
import { GithubProfile } from "@/components/preview/cards/github-profile"
import { IconPreviewGrid } from "@/components/preview/cards/icon-preview-grid"
import { InviteTeam } from "@/components/preview/cards/invite-team"
import { Invoice } from "@/components/preview/cards/invoice"
import { NoTeamMembers } from "@/components/preview/cards/no-team-members"
import { NotFound } from "@/components/preview/cards/not-found"
import { ObservabilityCard } from "@/components/preview/cards/observability-card"
import { PieChartCard } from "@/components/preview/cards/pie-chart-card"
import { ReportBug } from "@/components/preview/cards/report-bug"
import { ShippingAddress } from "@/components/preview/cards/shipping-address"
import { Shortcuts } from "@/components/preview/cards/shortcuts"
import { SkeletonLoading } from "@/components/preview/cards/skeleton-loading"
import { SleepReport } from "@/components/preview/cards/sleep-report"
import { StyleOverview } from "@/components/preview/cards/style-overview"
import { TypographySpecimen } from "@/components/preview/cards/typography-specimen"
import { UIElements } from "@/components/preview/cards/ui-elements"
import { UsageCard } from "@/components/preview/cards/usage-card"
import { Visitors } from "@/components/preview/cards/visitors"
import { WeeklyFitnessSummary } from "@/components/preview/cards/weekly-fitness-summary"
import { Reveal } from "@/components/motion/motion"

const CARDS = [
  StyleOverview, TypographySpecimen, UIElements, IconPreviewGrid,
  AnalyticsCard, BarChartCard, PieChartCard, Visitors, UsageCard, ObservabilityCard,
  AnomalyAlert, ContributionsActivity,
  CodespacesCard, EnvironmentVariables, Invoice, ShippingAddress,
  InviteTeam, Contributors, NoTeamMembers, AssignIssue, ActivateAgentDialog,
  FeedbackForm, ReportBug, BookAppointment, FileUpload, GithubProfile,
  WeeklyFitnessSummary, SleepReport, Shortcuts, SkeletonLoading, NotFound,
]

export function ExamplesGallery() {
  return (
    <div className="style-lyra">
      <div className="gap-4 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {CARDS.map((Card, i) => (
          <Reveal key={i} className="mb-4 break-inside-avoid " delay={(i % 4) * 0.06}>
            <Card />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
