import { QueryClient } from "@tanstack/react-query";
import { RouterContextProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteLayout } from "@/components/SiteLayout";
import { routeTree } from "@/routeTree.gen";

function renderLayout() {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/"] }),
    context: { queryClient: new QueryClient() },
  });

  return render(
    <RouterContextProvider router={router}>
      <SiteLayout>
        <main>contenido</main>
      </SiteLayout>
    </RouterContextProvider>,
  );
}

describe("Header navigation", () => {
  it("sends the Galería menu item to the gallery page", () => {
    renderLayout();
    expect(screen.getByRole("link", { name: /^galería$/i })).toHaveAttribute("href", "/galeria");
  });
});
