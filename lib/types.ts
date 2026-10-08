export type Scene={id:number;heading:string;location:string;time:string;action:string;dialogue:string;status:"draft"|"locked";visualPrompt:string};
export type Character={id:number;name:string;role:string;trait:string;bio:string;wants:string;secret:string};
export type Episode={id:number;title:string;status:"Draft"|"Planned"|"In Production"|"Locked";summary:string;scenes:Scene[]};
export type Relationship={id:number;from:number;to:number;type:string;strength:number;note:string};
export type Revision={id:string;createdAt:string;label:string;project:Project};
export type Project={title:string;genre:string;logline:string;season:number;bible:string;characters:Character[];episodes:Episode[];relationships:Relationship[]};