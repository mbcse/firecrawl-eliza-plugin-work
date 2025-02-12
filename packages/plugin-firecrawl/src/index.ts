import { Plugin } from "@elizaos/core";
import { getCrawlDataAction } from "./actions/getCrawlData";
import { getScrapeDataAction } from "./actions/getScrapeData";

export const firecrawlPlugin: Plugin = {
    name: "firecrawl",
    description: "Firecrawl plugin for Eliza",
    actions: [getCrawlDataAction, getScrapeDataAction],
    // evaluators analyze the situations and actions taken by the agent. they run after each agent action
    // allowing the agent to reflect on what happened and potentially trigger additional actions or modifications
    evaluators: [],
    // providers supply information and state to the agent's context, help agent access necessary data
    providers: [],
};
export default firecrawlPlugin;
