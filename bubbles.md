As mentioned in the introduction we are looking to identify bubbles in our channels, more specifically in the cluster defined in each channel. These bubbles would consist of users engaging in the same videos !

## Identification of clusters as bubbles

Let’s take a closer look at wether our clusters identify as bubbles. 
If particularly active people in a main channel are more likely to watch/comment on similar content than a random group of Youtube users then we can classify our cluster as a bubble.

![output](/assets/img/mean_heatmap1.png)

The heatmap confirms that users within the same channel (diagonal values) are more aligned than users across the channels (off diagonal values). And here’s the twist: pairwise interactions within these channels and across the channels are significantly higher than those involving the random group. When we look at the random group’s pairwise interactions, the jaccard index is much lower, which could suggest that the our clusters are not behaving randomly. But hey, let’s not jump to conclusions just yet- let's look at the percentiles to see how user similarities evolve across higher thresholds of shared content.

![output](/assets/img/jaccardindix.png)

While the similarity within the channels increases with the increase in percentile percentage,  the cross-channel interactions remains as weak. This reinforces the distinction between the clusters. What about the random users? well they are egal to 0. This likely means that our clusters do not behave randomly and have some common ground on the content watched. 

Knowing the strengthen similarities within channels and the weakened interactions across channels , it’s time to dig a little further. Let’s look at the whole distribution! 

![output](/assets/img/jaccar_index.png)

Same-channel pairs have a slower drop off than cross-channel pairs. Additionally looking at the distribution of jaccard indices of pairs of users including the random group we see the distribution loose his linearity and variates much more than the channels. This alignes with our previous assumption. 

Now that we know that there are stronger connections within the channels and a more erratic behavior in the random group, it’s time to connect the dots-literally!

![output](/assets/img/cluster_netword_channel.jpg)

We see that CNN, FOX and ABC are more interconnected compared to AJE and BBC. However all clusters show extremely weak interaction with the random group. This supports our previous hypothesis that our clusters are far from being random and instead represent distinct bubbles with limited external interactions. 

So far we have looked at the big picture of the clusters , but now it’s time to delve deeper into what’s happening with them.  


## Identification of bubbles within clusters. 

While our initial analysis provided valuable insights, the clusters were defined by us and did not reveal strong similarities in user activity or content engagement. To refine our understanding we know turn to DBSCAN- a clustering algorithm to identify subclusters - smaller more cohesive groups of users. Here’s what we uncovered ! 



 
Now that we have different bubbles with the clustering algorithm, 


Overall, bubbles can be identified in two ways as resumed in this scheme:

![output](/assets/img/shcema.jpg)

With the bubbles now identified, we’ve established the framework to delve deeper into their characteristic patterns.
