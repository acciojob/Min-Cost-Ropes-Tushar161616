function mincost(arr) {
   
    let heap = new MinHeap();
    for (let length of arr) {
        heap.insert(length);
    }

    let totalCost = 0;


    while (heap.size() > 1) {
        // Step 3: Extract the two shortest ropes
        let first = heap.extractMin();
        let second = heap.extractMin();

     
        let cost = first + second;
        totalCost += cost;

     
    }

    // Step 6: Return the total cost
    return totalCost;
}
module.exports=mincost;
