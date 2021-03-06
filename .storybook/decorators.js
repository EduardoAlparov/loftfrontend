export const bgGreyDecorator = () => {
  return {
    data: () => ({
      styles: {
        padding: "20px",
        background: "#ccc"
      }
    }),
    template: `
      <div :style="styles"><story/></div>
    `
  }
}