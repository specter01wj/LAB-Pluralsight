// Type conversion.
const parseStringNA = string => (string === 'NA' ? undefined : string);
const parseNumberNA = number => (number === 'NA' ? null : +number);

function type(d) {
  return {
    nodeID: +d.node_id,
    node: parseStringNA(d.node),
    parent: parseStringNA(d.parent),
    revenue: parseNumberNA(d.revenue),
    filmID: parseNumberNA(d.film_id),
  };
}

// Main function.
function ready(movies) {
  // Set dimensions.
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const width = 700 - margin.right - margin.left;
  const height = 700 - margin.top - margin.bottom;

  // Stratify data.
  const stratify = d3
    .stratify()
    .id(d => d.node)
    .parentId(d => d.parent);

  const filmHierarchy = stratify(movies);

  // Sum up revenue and sort data.
  filmHierarchy
    .sum(d => d.revenue)
    .sort((a, b) => b.height - a.height || b.value - a.value);

  // Circle pack layout.
  const treemapLayout = d3
    .pack()
    .size([width, height])
    .padding(5);

  // Create the treemap layout.
  packLayout(filmHierarchy);

  // Flatten the nodes for visual.
  const nodes = filmHierarchy.descendants();

  // Draw base.
  const svg = d3
    .select('.treemap-container')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // Draw visual.
}

// Load data.
const moviesData = d3.csv('data/movies_relations.csv', type).then(res => {
  ready(res);
});
