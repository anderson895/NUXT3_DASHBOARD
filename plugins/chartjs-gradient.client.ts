export default defineNuxtPlugin(() => {
  const createGradient = (
    ctx: CanvasRenderingContext2D,
    area: { top: number; bottom: number },
    color1: string,
    color2: string
  ) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  return {
    provide: {
      chartGradient: createGradient
    }
  };
});
