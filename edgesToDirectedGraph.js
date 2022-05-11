const edgesToDirectedGraph = (edges) => {

	let graph={};

	edges.forEach((elem)=>{
		let first= elem.shift();
		if(Array.isArray(graph[first])) {
			graph[first]=[...elem,...graph[first]];
		} else {
			graph[first]=[...elem];
		}

		
	});


	return graph;

}
