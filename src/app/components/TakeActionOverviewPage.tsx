export default function TakeActionOverviewPage() {
  return (
    <main className="flex flex-col min-h-screen" id="main">
      <div className="flex-grow container mx-auto pt-20">
        <h1 className="text-4xl font-bold mb-6">Overview</h1>

        <p>
          Clean & Green Philly can help you prioritize vacant properties to
          return to productive use. We encourage cleaning and greening
          interventions, but also recognize that there is no one-size-fits-all
          solution. To address gun violence and vacancy in Philadelphia, we will
          need a range of interventions, each tailored to local context. Below,
          we lay out ways that you can use this site to identify a property,
          understand how to get legal access to it, and think about the ways in
          which you might best return it to productive use—whether through
          cleaning and greening or otherwise.
        </p>

        <h2 className="text-2xl font-bold mt-8">What can I do?</h2>
        <p>
          Using this site, you can identify a high impact property, figure out
          how to get legal access to it, and decide on your preferred
          intervention to return the lot to productive use.
        </p>

        <p>At a minimum, we encourage cleaning and greening. This involves:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Removing trash and debris</li>
          <li>Grading the land</li>
          <li>Planting trees</li>
          <li>Installing low fences</li>
          <li>Regular maintenance</li>
        </ul>

        <p>
          The cost for these kinds of projects is usually low, about $5 per
          square yard, with maintenance around $0.50 per square yard. Even if
          you can't do everything, small steps like putting up a fence, planting
          some trees, or just keeping the area clean can make a big difference.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          How can Clean & Green Philly help me take action?
        </h2>

        <p>Basic use of Clean & Green Philly is simple:</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            Use the map to identify properties where you can have the highest
            impact for the most manageable effort.
          </li>
          <li>
            Based on the information provided in the tool about the property,
            identify how you can get access to it and what type of
            transformation(s) might be appropriate there.
          </li>
          <li>
            Use that information to get support from funders, local politicians,
            and others, to help you carry out your chosen intervention.
          </li>
          <li>Take action!</li>
        </ol>

        <p>
          In the future, we hope to add more specific information on things like
          applying for small grants, navigating the legal system, and more.
        </p>
      </div>
    </main>
  );
}
