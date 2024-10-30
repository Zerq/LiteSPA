import { MenuItem } from "../Components/MenuItem.js";
import { Menu } from "../Components/Menu.js"
import { Component} from "../libs/litespa/Component.js";
import { ToElement } from "../libs/litespa/ToElement.js";


@Component("lite-spa-view")
export class LiteSPA extends HTMLElement {

    public static observedAttributes = ["firstRender", "section"];

    public constructor() {
        super();
        this.attachShadow({ mode: "open" });

        let item = new Array<MenuItem>()

    }

    private render() {
        if (this.shadowRoot === null) {
            return;
        }


        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(ToElement(
            <div className="displayFlex">
                <link rel="stylesheet" href="./assets/litespa.css" />
                <my-menu id="articleOverview" orientation="Vertical"></my-menu>

                <div className="articles">
                    <article>
                        <header>
                            <h3 id="intro">Intro</h3>
                        </header>
                        <main>
                            <p>First of all this is 100% not an enterprise solution! this uses the built in module loader in the browser meaning it will mostly not run just about anything out in the wild since everyone jumped on the 3rd party module loader crazy train before the blessed Omnissiah inspired W3C consortium finished the offical standard module format.</p>
                            <p>Thus the world is ruined and perfection is forever lost... if your doing anything commercially where your going to need other libraries look somewhere else and live with heresy! :p</p>
                            <br />
                            <p>What this is good for is playing around or doing simpler websites where your not expecting to need any external components or you just wanna build it all yourself... all bridges are burn and where all alone out here... well almost...<br />
                                But its at least a bit tricker to import dependencies... <br />
                                And on the plus side you don't have to put up with the clutter and bloat.</p>
                        </main>
                        <footer>By Arch 2024-10-25</footer>
                    </article>
                    <article>
                        <header>
                            <h3 id="hooplatest">hooplatest</h3>
                        </header>
                        <main>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis diam fringilla, congue tellus nec, rutrum risus. Maecenas mattis est non odio sodales, eu euismod magna condimentum. Etiam interdum eleifend pharetra. Sed consectetur diam in interdum pulvinar. Sed at dignissim nisl. Vestibulum tempus nec eros non cursus. Quisque volutpat sem et urna dictum, nec aliquet nunc posuere. Curabitur non sapien pellentesque, gravida diam id, fermentum nisi. Quisque eros sem, egestas ac velit luctus, maximus tincidunt dui.
                                <br />
                                Nulla lobortis turpis sed dignissim sagittis. Quisque auctor consectetur feugiat. Ut posuere lorem luctus eleifend feugiat. Morbi ullamcorper commodo quam eu eleifend. Suspendisse potenti. In vitae quam consectetur, varius purus sit amet, vestibulum nunc. Donec ac ligula vulputate, fermentum orci in, pretium turpis. Cras sed tortor velit. Phasellus turpis lectus, tempor at pretium ac, fermentum eget elit. Cras risus nunc, tristique sed enim sit amet, faucibus placerat libero. Vivamus ultrices, leo commodo tempor aliquam, ante leo pellentesque urna, sed dignissim est ex nec massa.
                                <br />
                                Nunc in facilisis metus. Aliquam nec sapien in magna pharetra eleifend. Etiam ornare eros a magna faucibus, ac euismod ligula vulputate. Curabitur ultricies fermentum tristique. Nulla in nibh non tortor mattis pretium non id lectus. Praesent finibus congue venenatis. Aliquam molestie ligula sit amet porttitor placerat. Aliquam eget elementum mauris, id volutpat nibh. Etiam mauris mauris, aliquam eget massa a, pulvinar bibendum erat. Mauris varius, orci vitae finibus molestie, sem dolor pulvinar ipsum, sed scelerisque sapien sapien vel arcu. Mauris hendrerit, sem a aliquet semper, metus sapien scelerisque tellus, et egestas nulla nibh non leo. Curabitur sed massa rutrum, rutrum ligula sit amet, venenatis leo. Sed pellentesque vel augue nec lobortis. Ut faucibus diam quis nunc fermentum venenatis.
                                <br />
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vitae maximus turpis. Etiam varius faucibus nisl, congue feugiat turpis maximus sit amet. Etiam at sodales elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vitae egestas sem, vestibulum rutrum lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eu metus at eros finibus pretium rhoncus sit amet nunc. Proin ullamcorper diam risus, et porta velit iaculis ut. Phasellus vel porta purus. Etiam non tincidunt metus, nec ornare risus. Aenean commodo augue et semper porta. Aliquam finibus velit ex, a rhoncus est faucibus ut. Vestibulum sit amet nisi nunc.
                                <br />
                                Etiam in bibendum augue, eu rutrum magna. Proin non risus eget tortor vehicula pharetra. Donec rhoncus at mi ac aliquam. Nullam fermentum semper laoreet. Etiam rhoncus erat sit amet egestas venenatis. Cras egestas leo vel volutpat vestibulum. Mauris varius ligula ligula, at sollicitudin felis dictum nec. Aenean commodo enim vitae erat mollis, ullamcorper lacinia ex hendrerit. Donec posuere tellus tortor, luctus dictum lacus feugiat sit amet. Ut bibendum imperdiet suscipit. Donec enim purus, tincidunt vel leo sed, sodales congue tellus. Integer varius ante tortor, vehicula interdum est finibus tempus. Proin interdum volutpat lorem sit amet tristique. Pellentesque tristique a ipsum in consectetur. Nam sit amet mauris ullamcorper, vehicula massa non, auctor turpis. Curabitur bibendum libero consequat, tincidunt nisl sit amet, egestas dui.
                            </p>
                        </main>
                        <footer>By Arch 2024-10-25</footer>
                    </article>
                    <article>
                        <header>
                            <h3 id="hooplatest2">hooplatest2</h3>
                        </header>
                        <main>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus velit, pellentesque pellentesque hendrerit in, iaculis hendrerit mi. Donec tempus metus a ligula mollis finibus. Proin egestas tincidunt justo ac varius. Aliquam eget pharetra ante. Vestibulum at arcu vel mauris fringilla hendrerit id id ipsum. Fusce turpis velit, hendrerit in nisl eget, accumsan pretium purus. Duis vitae consequat ligula. Duis id imperdiet magna, vel bibendum tellus. Maecenas vitae magna ut mauris fringilla sagittis sed at augue. Maecenas tincidunt tortor non mollis sollicitudin. Aliquam mollis, dolor et eleifend commodo, massa diam pulvinar nibh, id luctus sapien nisi quis odio. Fusce eget neque lobortis, molestie ligula ut, suscipit nibh. Donec aliquet urna eu placerat semper.

                                Nam quis convallis diam, volutpat facilisis velit. Aenean pharetra gravida tempus. Morbi eget sollicitudin elit, eu condimentum justo. Donec ligula massa, luctus vitae consectetur eget, efficitur et nibh. Nullam lacus orci, viverra a faucibus nec, scelerisque vitae felis. Ut quis justo ante. Vivamus fringilla massa tincidunt ex efficitur, non ultrices mauris imperdiet. Maecenas sit amet mattis risus. Aenean in eros diam. Fusce posuere eu diam a vehicula. Pellentesque non enim quam. Pellentesque iaculis, orci nec tempor tristique, eros nisi scelerisque felis, eget dictum risus neque eget eros. Phasellus nibh erat, blandit et vestibulum eu, mollis non orci. Sed sodales sapien eu felis euismod convallis.
                                <br />
                                Morbi tristique leo nec laoreet congue. Phasellus ullamcorper mi sed ante pretium, vitae dictum massa egestas. Phasellus molestie sodales viverra. Mauris feugiat, libero sit amet scelerisque blandit, nisi felis fringilla tortor, in tincidunt ante felis sed turpis. Praesent sit amet ante fringilla, viverra libero in, gravida lectus. Nam mattis euismod sem sit amet ornare. Curabitur sapien enim, iaculis at metus eget, imperdiet consequat augue. Sed vehicula euismod purus in bibendum. Phasellus euismod enim sed lacus imperdiet, quis facilisis massa laoreet. Sed rutrum, tortor in tristique consectetur, tellus massa ultricies mi, ut tempor nibh nisi sed sapien. Fusce risus arcu, iaculis ultrices euismod eu, ullamcorper id nulla. Sed velit nibh, fermentum ac erat eu, feugiat vulputate velit.
                                <br />
                                Donec bibendum sit amet tellus sit amet fringilla. Quisque sit amet augue in metus varius euismod. Nunc auctor mauris non massa placerat, quis euismod ex faucibus. Quisque quis ultrices dui, semper facilisis dui. Ut eget lacus vel enim pellentesque eleifend vulputate at ipsum. Nunc quis volutpat massa. Duis sit amet luctus leo, eget finibus ante. Integer augue purus, blandit id pellentesque id, rutrum ut eros. Vivamus id egestas nibh, et tincidunt orci. Phasellus risus felis, elementum a ultrices eu, tincidunt non mi. Duis finibus erat id scelerisque consequat. Aliquam semper urna eget eros fringilla, at ultrices lorem euismod. Etiam aliquet mauris nisi, et aliquet lacus porta a. Sed tempus augue porttitor fermentum ultricies. Vivamus gravida sollicitudin euismod. Cras orci enim, condimentum ac ex ac, rutrum egestas nibh.
                                <br />
                                Pellentesque et tellus orci. Suspendisse bibendum pharetra nisi, quis tincidunt felis tempus semper. Nunc venenatis nunc et nibh aliquam cursus. Vivamus interdum ligula sed ullamcorper lobortis. Nam purus nulla, vehicula nec consectetur sit amet, ultrices eu lorem. Vestibulum eget tincidunt nisl. Sed et velit eget felis venenatis dapibus sed vitae eros. Donec a elit vestibulum, fringilla erat vitae, faucibus dui. Nunc vitae dolor ut nisi dignissim eleifend ut a nibh. Donec sit amet viverra nunc. Cras tempus tellus non lorem tincidunt, semper fermentum erat condimentum.</p>
                        </main>
                        <footer>By Arch 2024-10-25</footer>
                    </article>
                </div>
            </div>
        ));

        requestAnimationFrame(() => {

            const menu = this.shadowRoot?.getElementById("articleOverview") as Menu;
            menu?.SetItems([
                {
                    Name: "intro",
                    Type: "HashLink",
                    Hash: "#litespa/intro"
                },
                {
                    Name: "hooplatest",
                    Type: "HashLink",
                    Hash: "#litespa/hooplatest"
                },
                {
                    Name: "hooplatest2",
                    Type: "HashLink",
                    Hash: "#litespa/hooplatest2"
                }
            ]);

        });

    }

    public connectedCallback() {
        this.render();
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name ==="firstRender" && newValue === "true"){
            this.render();
        }
        
        if (name === "section") {
            setTimeout(() => {
                const element = this.shadowRoot?.getElementById(newValue);
                element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 0);
        }
    }
}