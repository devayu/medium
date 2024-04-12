import { Hono } from "hono";

const app = new Hono();
/*
POST /api/v1/user/signup
POST /api/v1/user/signin 
POST /api/v1/blog
PUT /api/v1/blog
GET /api/v1/blog/:id
GET /api/v1/blog/bulk
*/

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  return c.text("Hello Hono!");
});

app.post("/api/v1/user/signup", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/user/signin", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

export default app;
