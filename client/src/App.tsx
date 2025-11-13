import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import BackTop from "@uiw/react-back-top";
import { CircleFadingArrowUp } from "lucide-react";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <BackTop
          speed={30}
          content={<CircleFadingArrowUp size={30} className="text-primary" />}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
