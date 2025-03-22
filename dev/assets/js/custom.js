document.querySelector('.accordion') ? accordionInstall() : null;

$('.products__card').click(function() {

	const shopUrl = 'https://tsodykteststore.myshopify.com/api/2023-01/graphql.json';
	const query = `
	{
    products(first: 10) {
    		edges {
        		node {
        			title
        			description
        			variants(first: 1) {
            			edges {
            				node {
                				price {
                					amount
                					currencyCode
                				}
                				compareAtPrice {
                					amount
                					currencyCode
                				}
            				}
            			}
        			}
        			images(first: 2) {
            			edges {
            				node {
                				url
                				altText
            				}
            			}
        			}
        		}
    		}
    	}
	}
`;

fetch(shopUrl, {
	method: 'POST',
	headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': '7e174585a317d187255660745da44cc7',
	},
	body: JSON.stringify({ query }),
})
	.then((response) => response.json())
	.then((data) => {
    console.log(data);
	})
	.catch((error) => {
    console.error('Error:', error);
	});
})

