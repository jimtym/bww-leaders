module.exports = async function (context, req) {
  context.res = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: {
      categories: [
        { name: "Best Musical", leader: "Show A" },
        { name: "Best Actor", leader: "Actor B" },
        { name: "Best Actress", leader: "Actress C" }
      ]
    }
  };
};
