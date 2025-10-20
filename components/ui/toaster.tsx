"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="qg:7q3z">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="o2:2p7o">
            <div className="grid gap-1" data-oid="_x-_vb9">
              {title && <ToastTitle data-oid="no3lrba">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="m6r_:9h">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="z:jgjtd" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="kiu9be_" />
    </ToastProvider>
  );
}
