//credit: https://github.com/panicsteve/cloud-to-butt/

walk(document.body);

function walk(node)  
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
    console.log(v);

    // personal pronouns 
    v = v.replace(/\bshe\b/g, "they");
    v = v.replace(/\bShe\b/g, "They");
    v = v.replace(/\bher\b/g, "their");
    v = v.replace(/\bHer\b/g, "Their");
    v = v.replace(/\bhe\b/g, "they");
    v = v.replace(/\bHe\b/g, "They");
    v = v.replace(/\bhim\b/g, "them");
    v = v.replace(/\bHim\b/g, "Them");

    //possisive pronouns 
    v = v.replace(/\bhers\b/g, "theirs");
    v = v.replace(/\bHers\b/g, "Theirs");
    v = v.replace(/\bhis\b/g, "their");
    v = v.replace(/\bHis\b/g, "their");

    //nouns 
    v = v.replace(/\bman\b/g, "person");
    v = v.replace(/\bMan\b/g, "Person");
    v = v.replace(/\bmen\b/g, "people");
    v = v.replace(/\bMen\b/g, "People");
    v = v.replace(/\bwoman\b/g, "person");
    v = v.replace(/\bWoman\b/g, "Person");
    v = v.replace(/\bwomen\b/g, "people");
    v = v.replace(/\bWomen\b/g, "People");
    v = v.replace(/\bgirl\b/g, "person");
    v = v.replace(/\bGirl\b/g, "Person");
    v = v.replace(/\bgirls\b/g, "people");
    v = v.replace(/\bGirls\b/g, "People");
    v = v.replace(/\bboy\b/g, "person");
    v = v.replace(/\bBoy\b/g, "Person");
    v = v.replace(/\bboys\b/g, "people");
    v = v.replace(/\bBoys\b/g, "People");

    //relational nouns
    v = v.replace(/\bdaughter\b/g, "child");
    v = v.replace(/\bDaughter\b/g, "Child");
    v = v.replace(/\bdaughters\b/g, "children");
    v = v.replace(/\bDaughters\b/g, "Children");
    v = v.replace(/\bson\b/g, "child");
    v = v.replace(/\bSon\b/g, "Child");
    v = v.replace(/\bsons\b/g, "children");
    v = v.replace(/\bSons\b/g, "Children");

    v = v.replace(/\bwife\b/g, "spouse");
    v = v.replace(/\bWife\b/g, "Spouse");
    v = v.replace(/\bhusband\b/g, "spouse");
    v = v.replace(/\bHusband\b/g, "Spouse");
    v = v.replace(/\bgirlfriend\b/g, "partner");
    v = v.replace(/\bGirlfriend\b/g, "Partner");
    v = v.replace(/\bboyfriend\b/g, "partner");
    v = v.replace(/\bBoyfriend\b/g, "Partner");

    v = v.replace(/\bmother\b/g, "parent");
    v = v.replace(/\bmothers\b/g, "parents");
    v = v.replace(/\bMother\b/g, "Parent");
    v = v.replace(/\bMothers\b/g, "Parents");
    v = v.replace(/\bmom\b/g, "parent");
    v = v.replace(/\bMom\b/g, "Parent");
    v = v.replace(/\bmoms\b/g, "parents");
    v = v.replace(/\bMoms\b/g, "Parents");
    v = v.replace(/\bfather\b/g, "parent");
    v = v.replace(/\bfathers\b/g, "parents");
    v = v.replace(/\bFather\b/g, "Parent");
    v = v.replace(/\bFathers\b/g, "Parents");
    v = v.replace(/\bdad\b/g, "parent");
    v = v.replace(/\bDad\b/g, "Parent");
    v = v.replace(/\bdads\b/g, "parents");
    v = v.replace(/\bDads\b/g, "Parents");

    v = v.replace(/\bgrandmother\b/g, "grandparent");
    v = v.replace(/\bgrandmothers\b/g, "grandparents");
    v = v.replace(/\bGrandmother\b/g, "Grandparent");
    v = v.replace(/\bGrandmothers\b/g, "Grandparents");
    v = v.replace(/\bgrandfather\b/g, "grandfather");
    v = v.replace(/\bgrandfathers\b/g, "grandparents");
    v = v.replace(/\bGrandfather\b/g, "Grandfather");
    v = v.replace(/\bGrandfathers\b/g, "Grandparents");

    v = v.replace(/\baunt\b/g, "relative");
    v = v.replace(/\baunts\b/g, "relatives");
    v = v.replace(/\bAunt\b/g, "Relative");
    v = v.replace(/\bAunts\b/g, "Relatives");
    v = v.replace(/\buncle\b/g, "relative");
    v = v.replace(/\buncles\b/g, "relatives");
    v = v.replace(/\bUncle\b/g, "Relative");
    v = v.replace(/\bUncles\b/g, "Relatives");

    v = v.replace(/\bniece\b/g, "relative");
    v = v.replace(/\bnieces\b/g, "relatives");
    v = v.replace(/\bNiece\b/g, "Relative");
    v = v.replace(/\bNieces\b/g, "Relatives");
    v = v.replace(/\bnephew\b/g, "relative");
    v = v.replace(/\bnephews\b/g, "relatives");
    v = v.replace(/\bNephew\b/g, "Relative");
    v = v.replace(/\bNephew\b/g, "Relatives");

    v = v.replace(/\bsister\b/g, "sibling");
    v = v.replace(/\bsisters\b/g, "siblings");
    v = v.replace(/\bSister\b/g, "Sibling");
    v = v.replace(/\bSisters\b/g, "Siblings");
    v = v.replace(/\bbrother\b/g, "sibling");
    v = v.replace(/\bbrothers\b/g, "siblings");
    v = v.replace(/\bBrother\b/g, "Sibling");
    v = v.replace(/\bBrothers\b/g, "Siblings");
   
    //prefixes -- not sure if these are working
    v = v.replace(/\bMr\.?b/g, "Mx");
    v = v.replace(/\bMrs\.?b/g, "Mx");
    v = v.replace(/\bMs\.?b/g, "Mx");
    v = v.replace(/\bMiss\.?b/g, "Mx");
    v = v.replace(/\bMister\.?b/g, "Mx");
	

    textNode.nodeValue = v;
}