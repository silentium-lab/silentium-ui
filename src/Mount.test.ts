import { describe, it, expect, vi, beforeEach } from "vitest";
import { Mount } from "./Mount";
import { DestroyContainer } from "silentium";

// Mock the dependencies
vi.mock("silentium", () => ({
  Message: vi.fn((fn) => {
    const obj = {
      then: (resolve: any) => {
        const cleanup = fn(resolve, () => {});
        obj.cleanup = cleanup;
        return obj;
      },
      cleanup: () => {},
    };
    return obj;
  }),
  Applied: vi.fn((msg, fn) => Promise.resolve(fn(msg))),
  DestroyContainer: vi.fn(() => ({
    add: vi.fn(),
    destroy: vi.fn(),
  })),
  Any: vi.fn((a, b) => b),
  Void: vi.fn(() => Promise.resolve()),
  Of: vi.fn((val) => val),
  Shared: vi.fn((val) => val),
}));

vi.mock("silentium-morphdom", () => ({
  Render: vi.fn(() => Promise.resolve()),
}));

vi.mock("silentium-web-api", () => ({
  Element: vi.fn(() => Promise.resolve({})),
}));

vi.mock("./Id", () => ({
  Id: vi.fn(() => "test-id"),
}));

vi.mock("./ClassName", () => ({
  ClassName: vi.fn(() => "test-class"),
}));

describe("Mount", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should resolve with HTML string for default tag", async () => {
    const result = await Mount("test content" as any);
    expect(result).toBe('<div class="test-id"></div>');
  });

  it("should resolve with HTML string for custom tag", async () => {
    const result = await Mount("test content" as any, "span");
    expect(result).toBe('<span class="test-id"></span>');
  });

  it("should handle default value", async () => {
    const result = await Mount("test content" as any, "div", "default");
    expect(result).toBe('<div class="test-id"></div>');
  });

  it("should not apply default value when not provided", async () => {
    const result = await Mount("test content" as any);
    expect(result).toBe('<div class="test-id"></div>');
  });

  it("should call DestroyContainer and add elements", async () => {
    await Mount("test content" as any);
    expect(DestroyContainer).toHaveBeenCalled();
    const dcMock = (DestroyContainer as any).mock.results[0].value;
    expect(dcMock.add).toHaveBeenCalledTimes(2); // element and render
  });
});
