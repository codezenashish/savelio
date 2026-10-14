"use client";

import * as React from "react";
import { Drawer } from "vaul";
import { X, Sparkles, ExternalLink, Mail, CheckCircle2 } from "lucide-react";
import {
  SUBMISSION_DRAWER_DATA,
  type SubmissionGuideline,
  type SubmissionDrawerData,
} from "@/data/features";
import { Button, Badge } from "@/components/ui";

export interface BetaInfoDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  drawerData?: SubmissionDrawerData;
}

export function BetaInfoDrawer({
  open,
  onOpenChange,
  drawerData = SUBMISSION_DRAWER_DATA,
  title = drawerData.title,
  description = drawerData.description,
}: BetaInfoDrawerProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xs transition-opacity duration-200" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[90vh] flex-col rounded-t-2xl border-t border-border bg-card text-card-foreground shadow-2xl outline-none sm:max-w-2xl sm:mx-auto sm:border-x">
          <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-muted-foreground/30" />

          <div className="flex items-start justify-between border-b border-border px-6 py-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="brand" size="sm" className="font-semibold tracking-wider">
                  <Sparkles className="size-3" />
                  {drawerData.badge}
                </Badge>
              </div>
              <Drawer.Title className="text-lg font-semibold tracking-tight text-foreground">
                {title}
              </Drawer.Title>
              <Drawer.Description className="small-text mt-0.5">
                {description}
              </Drawer.Description>
            </div>

            <Drawer.Close asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Close modal"
                className="rounded-full text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </Button>
            </Drawer.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 pb-[max(1.5rem,env(safe-area-inset-bottom,1.5rem))]">
            <div className="space-y-2.5">
              {drawerData.guidelines.map((guideline: SubmissionGuideline) => {
                const Icon = guideline.icon;

                return (
                  <div
                    key={guideline.id}
                    className="flex items-start gap-3.5 rounded-xl border border-border/70 bg-card/60 p-3.5 transition-colors duration-150 hover:bg-muted/30"
                  >
                    <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                      <Icon className="size-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-foreground">
                          {guideline.title}
                        </h4>
                        <Badge
                          variant={guideline.tagVariant ?? "neutral"}
                          size="sm"
                        >
                          {guideline.tag}
                        </Badge>
                      </div>

                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {guideline.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-medium text-foreground">
                  {drawerData.templateText}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={drawerData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="default" className="w-full text-xs h-9 justify-center gap-2">
                    <span>Submit on GitHub</span>
                    <ExternalLink className="size-3.5" />
                  </Button>
                </a>

                <a
                  href={drawerData.emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full text-xs h-9 justify-center gap-2">
                    <Mail className="size-3.5" />
                    <span>Submit via Email</span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="pt-2 text-center small-text text-muted-foreground/80">
              <p>{drawerData.footerNotice}</p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default BetaInfoDrawer;
