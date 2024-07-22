import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Comparison = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">TCL vs LUA: A Comprehensive Comparison</h1>
      <p className="text-xl text-center text-muted-foreground mb-8">Understanding the Differences Between Two Powerful Scripting Languages</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>TCL Syntax</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md">
                <code>{`
# TCL Hello World
puts "Hello, World!"

# TCL Variable
set name "John"
puts $name

# TCL Function
proc greet {name} {
    return "Hello, $name!"
}
puts [greet "Alice"]
                `}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>LUA Syntax</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md">
                <code>{`
-- LUA Hello World
print("Hello, World!")

-- LUA Variable
local name = "John"
print(name)

-- LUA Function
function greet(name)
    return "Hello, " .. name .. "!"
end
print(greet("Alice"))
                `}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>TCL Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Automated testing and test frameworks</li>
                <li>Network programming and protocols</li>
                <li>GUI development with Tk</li>
                <li>Rapid prototyping</li>
                <li>Embedded systems programming</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>LUA Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Game development and scripting</li>
                <li>Embedded systems and IoT devices</li>
                <li>Configuration files for applications</li>
                <li>Web development (e.g., OpenResty)</li>
                <li>Scientific computing and data analysis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Performance</h2>
        <Card>
          <CardContent className="pt-6">
            <p>
              Both TCL and LUA are known for their efficiency, but they have different performance characteristics:
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>
                <strong>Execution Speed:</strong> LUA generally outperforms TCL in raw execution speed, especially for numerical computations.
              </li>
              <li>
                <strong>Memory Usage:</strong> LUA typically has a smaller memory footprint compared to TCL, making it more suitable for embedded systems.
              </li>
              <li>
                <strong>Startup Time:</strong> TCL often has faster startup times for small scripts, while LUA's performance shines in longer-running applications.
              </li>
              <li>
                <strong>Garbage Collection:</strong> LUA's garbage collector is generally more efficient, leading to smoother performance in long-running applications.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Community Support</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">TCL Community</h3>
                <ul className="list-disc pl-5">
                  <li>Established community with a long history</li>
                  <li>Strong presence in testing and automation fields</li>
                  <li>Active mailing lists and forums</li>
                  <li>Annual TCL/Tk Conference</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">LUA Community</h3>
                <ul className="list-disc pl-5">
                  <li>Growing community, especially in game development</li>
                  <li>Active GitHub repositories and package managers</li>
                  <li>Regular LUA Workshop events</li>
                  <li>Strong integration with C/C++ projects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Comparison;